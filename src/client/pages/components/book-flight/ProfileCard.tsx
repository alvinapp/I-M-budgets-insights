import React from "react";

type ProfileCardProps = {
  icon?: React.ReactNode;
  title?: string;
};
const ProfileCard = ({ icon, title }: ProfileCardProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="text-skin-neutral mr-4">{icon}</div>
      <div className="text-skin-base text-base font-poppins tracking-progress_label">
        {title}
      </div>
    </div>
  );
};
export default ProfileCard;
