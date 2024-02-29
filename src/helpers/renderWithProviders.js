
import { MemoryRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";

export const renderWithProviders = ({components}) => {
  return (
    <AuthContextProvider>
      <MemoryRouter initialEntries={['/']}>
        {components}
      </MemoryRouter>
    </AuthContextProvider>
  );
};
