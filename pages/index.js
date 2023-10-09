import { Container } from "@chakra-ui/react";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import CalendarList from "../components/CalendarList";

export default function Home() {
  return (
    <Container maxW="7xl">
      <Auth />
      <TodoList />
      <CalendarList />
    </Container>
  )
};
