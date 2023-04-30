import styled from 'styled-components';

export const TaskListWrapper = styled.div`
  // Add your styles here
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskListItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #dee2e6;
  &:last-child {
    border-bottom: none;
  }
`;

export const Button = styled.button`
  // Add your styles here
`;


// export const ListItem = styled.li`
//   padding: 8px 0;
//   border-bottom: 1px solid #dee2e6;
//   &:last-child {
//     border-bottom: none;
//   }
// `;