import Mainheading from "../components/Mainheading/Mainheading";
import Widgets from "../components/Widgets/Widgets";
import GeneralInfo from "../sections/GeneralInfo/GeneralInfo";
import SiteControl from "../sections/SiteControl/SiteControl";
import SecurityInfo from "../sections/SecurityInfo/SecurityInfo";
import SocialInfo from "../sections/SocialInfo/SocialInfo";
import WidgetControl from "../sections/WidgetControl/WidgetControl";
import BackupManager from "../sections/BackupManager/BackupManager";

const Settings = () => {
  const sections = [
    { id: 1, Section: SiteControl },
    { id: 2, Section: GeneralInfo },
    { id: 3, Section: SecurityInfo },
    { id: 4, Section: SocialInfo },
    { id: 5, Section: WidgetControl },
    { id: 6, Section: BackupManager },
  ];

  return (
    <div className="settings-page">
      <Mainheading>Settings</Mainheading>
      <Widgets sections={sections} />
    </div>
  );
};

export default Settings;
