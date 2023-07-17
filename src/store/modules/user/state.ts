import { IUser } from "@/utils/types";

export type IAuthState = {
  accessToken: string;
  user: IUser | null;
  userData: IUser;
  email?: string;
  messagerError?: string;
  userType: string;
  nudgeSeen: boolean;
  auth0Client: any;
};

export const authState: IAuthState =  {
    accessToken: (window as any).localStorage.getItem('accessToken'),
    auth0Client: null,
    user: null,
    userData: {} as IUser,
    userType: (window as any).localStorage.getItem('userType'),
    nudgeSeen: false
};

