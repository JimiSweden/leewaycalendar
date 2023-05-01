import React, { FC } from 'react';
import { UserWrapper } from './User.styled';

interface UserProps {}

const User: FC<UserProps> = () => (
 <UserWrapper>
    User Component
 </UserWrapper>
);

export default User;
