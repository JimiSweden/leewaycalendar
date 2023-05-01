import styled from 'styled-components';

export const TaskListWrapper = styled.div`
  // Add your styles here
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskListItem = styled.li`
  padding-right: 1rem;
  /* padding: 8px 0; */
  /* border-top: none;
  &:first-child {
    border-top: 1px solid #dee2e6;
  }
  border-bottom: 1px solid #dee2e6;
  &:last-child {
    border-bottom: none;
  } */
`;

export const Button = styled.button`
  // Add your styles here
`;

export const TasksAndPermissionManagementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  padding: 0.5rem 0.5rem 1rem 0;

  border-top: none;
  &:first-child {
    border-top: 1px solid #dee2e6;
  }
  border-bottom: 1px solid #dee2e6;
  &:last-child {
    border-bottom: none;
  }
`;


// export const ListItem = styled.li`
//   padding: 8px 0;
//   border-bottom: 1px solid #dee2e6;
//   &:last-child {
//     border-bottom: none;
//   }
// `;