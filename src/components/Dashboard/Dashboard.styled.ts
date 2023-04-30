// Dashboard.styled.ts
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const EnvironmentMessage = styled.h2`
  color: orange;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #dee2e6;
  &:last-child {
    border-bottom: none;
  }
`;
