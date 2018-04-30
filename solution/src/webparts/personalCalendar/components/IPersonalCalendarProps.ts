import { IPersonalCalendarWebPartProps } from "../PersonalCalendarWebPart";
import { DisplayMode } from "@microsoft/sp-core-library";
import { MSGraphClient } from "@microsoft/sp-client-preview";

export interface IPersonalCalendarProps extends IPersonalCalendarWebPartProps {
  displayMode: DisplayMode;
  graphClient: MSGraphClient;
  updateProperty: (value: string) => void;
}
