import { DateTime } from "luxon";

import Error from "../error/error.component";
import Table from "../table/table.component";
import constants from "../../utils/constants";
import Loader from "../loader/loader.component";
import useGetApi from "../../hooks/useGetApi.hook";
import RangeFilter from "../range-filter/rangeFilter.component";

import "./patientsList.styles.css";

const { getPatientsListUrl } = constants;

const formatBirthDate = (birthDate) => {
  if (!birthDate) return null;

  return DateTime.fromISO(birthDate).toFormat("MMMM dd, yyyy");
};

const calculateAge = (birthDate) => {
  if (!birthDate) return null;

  const start = DateTime.fromISO(birthDate);
  const end = DateTime.now();
  const diff = end.diff(start, "years");
  return Math.floor(diff.toObject().years);
};

const patientsDataFormatterFn = (rawPatientsApiResponse) => {
  const rawPatientsList = rawPatientsApiResponse.entry.map(
    (entry) => entry.resource
  );
  return rawPatientsList.reduce((accumVal, currVal) => {
    const { id, name, birthDate, gender, telecom, address } = currVal;

    const city = address?.[0]?.city;
    const phone = telecom?.[0]?.value;
    const age = calculateAge(birthDate);
    const formattedBirthDate = formatBirthDate(birthDate);
    const patientName = `${name?.[0]?.family} ${name?.[0]?.given[0]}`;

    const patientObj = {
      id,
      age,
      city,
      phone,
      gender,
      birthDate: formattedBirthDate,
      patientName,
    };

    accumVal.push(patientObj);
    return accumVal;
  }, []);
};

function PatientsList() {
  const { isLoading, error, data } = useGetApi(
    getPatientsListUrl,
    patientsDataFormatterFn
  );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <RangeFilter />
          <Table data={data} />
        </>
      )}
    </>
  );
}

export default PatientsList;