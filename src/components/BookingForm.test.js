import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders booking form heading", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      updateTimes={() => {}}
      submitForm={() => {}}
    />
  );
  const dateLabel = screen.getByLabelText(/Choose date/i);
  expect(dateLabel).toBeInTheDocument();
});

test("form submission calls submitForm function", () => {
  const mockSubmit = jest.fn();
  render(
    <BookingForm
      availableTimes={["17:00"]}
      updateTimes={() => {}}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2026-02-22" } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

  fireEvent.click(screen.getByText(/Book Now/i));
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});