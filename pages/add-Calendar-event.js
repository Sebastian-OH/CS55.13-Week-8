import { Container } from "@chakra-ui/react";
import Auth from "../components/Auth";
import AddCalendar from "../components/AddCalendar";

export default function AddCalendarEvent() {
  return (
    <Container maxW="7xl">
      <Auth />
      <AddCalendar />
    </Container>
  )
};
