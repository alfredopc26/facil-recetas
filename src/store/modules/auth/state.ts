type IUserData = {
  "id": number,
  "image": string,
  "imageProfileURL": string,
  "email": string,
  "lastName": string,
  "firstName": string,
  "lang": string,
  "level": number,
  "active": number,
  "status": number,
  "meta": any[],
  "settings": any[],
  "alerts": any[],
  "filters": any[],
  'profesional_title': string,
  'profesional_url': string,
  'cv_filename': string,
  'cv_url': string
}

export type IAuthState = {
  accessToken: string;
  user: IUserData | null;
  userData: IUserData;
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
    userData: {} as IUserData,
    userType: (window as any).localStorage.getItem('userType'),
    nudgeSeen: false
};

