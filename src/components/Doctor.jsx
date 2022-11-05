import React, { useState, useEffect } from "react";
import { getDoctor } from "./api";
import InitialFocus from "./AddDoctor";
import Hospital from "./AddHospital";
import { Box, Text, Flex, Select, Button } from "@chakra-ui/react";

const Doctor = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    handleGet();
  }, [limit, page, sort]);

  const handleGet = () => {
    setLoading(true);
    getDoctor(limit, page, sort)
      .then((res) => setDoctor(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  console.log(doctor);

  return loading ? (
    <Box>
      <Text>...Loading</Text>
    </Box>
  ) : error ? (
    <Box>
      <Text>...Something Went Wrong</Text>
    </Box>
  ) : (
    <>
      <Box>
        <InitialFocus
          handleGet={handleGet}
          setLoading={setLoading}
          setError={setError}
        />{" "}
        <Hospital />
        <Box>
          <Select
            placeholder="Sort (Salary)"
            onChange={(e) => setSort(e.target.value)}
          >
            {" "}
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>{" "}
          <Select
            placeholder="Select Limit"
            onChange={(e) => setLimit(e.target.value)}
          >
            {" "}
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Select>{" "}
          <Button
            ml="40px"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev Page
          </Button>
          <Button
            ml="40px"
            disabled={doctor.length < limit}
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </Button>
        </Box>
        <Box>
          {" "}
          <Flex>
            <Text ml="40px">id</Text>
            <Text ml="40px">Name</Text>
            <Text ml="40px">Hospital</Text>
            <Text ml="40px">Specialization</Text>
            <Text ml="40px">Salary</Text>
            <Text ml="40px">Details</Text>
          </Flex>{" "}
          <hr />{" "}
          {doctor.map((data) => (
            <Box>
              {" "}
              <Flex key={data.id}>
                <Text ml="40px">{data.id}</Text>
                <Text ml="40px">{data.name.firstname}</Text>
                <Text ml="40px">{data.password} Hospital</Text>
                <Text ml="40px">General</Text>
                <Text ml="40px">${data.address.number}00</Text>
                <Text ml="40px">View More Details</Text>
              </Flex>{" "}
              <hr />{" "}
            </Box>
          ))}{" "}
        </Box>
      </Box>
    </>
  );
};
export default Doctor;
