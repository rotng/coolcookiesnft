import { Lead } from '../lead/lead';
import { Role } from '../role/role';
import { Tab } from '../tab/tab';

export type User = {
  id: string;
  roles: Role[];
  leaders: Lead[];
  followers: Lead[];
  tabs: Tab[];
  email: string;
  name: string;
  lowercaseName: string;
  routeName: string;
  description: string;
  color: string;
  palette: string;
  balance: number;
  lng: number | null;
  lat: number | null;
  mapLng: number | null;
  mapLat: number | null;
  mapZoom: number | null;
  verifyEmailDate: Date | null;
  isRegisteredWithGoogle: boolean;
  activeDate: Date;
  checkAlertsDate: Date;
  createDate: Date;
  updateDate: Date;
  deleteDate: Date | null;

  currentUserLead: Lead | null;
  
  __typename: string;
};
