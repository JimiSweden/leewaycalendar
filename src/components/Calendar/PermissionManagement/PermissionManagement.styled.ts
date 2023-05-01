import styled from 'styled-components';

// export const CalendarPermissionManagementWrapper = styled.div`
// `;

export const Container = styled.div`
  /* width: 100%; */
  /* min-width: 550px; */
  /* min-width: 450px; */
  min-width: 400px;
`;

export const ShareButton = styled.button`
  margin-right: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const SharedLink = styled.div`
  margin: 10px 0;
  padding: 8px 16px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 100%;
  /* width: fit-content; */
  border-collapse: collapse;
  margin-top: 16px;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #dee2e6;
`;

export const Select = styled.select`
  width: 100%;
  padding: 4px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #80bdff;
  }
`;
