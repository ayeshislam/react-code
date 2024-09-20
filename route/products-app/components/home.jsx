import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Home = () => {
  let url =
    "https://product-data-94188-default-rtdb.asia-southeast1.firebasedatabase.app/products";

  let [data, setData] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Box>
      <h2>Home</h2>
      <Grid templateColumns="repeat(4,1fr)">
        {Object.entries(data).map(([id, ele]) => {
          return (
            <Card maxW="sm">
              <CardBody>
                <Image src={ele.image} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{ele.title}</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    {ele.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};
