import React from "react";
import {createIcon} from "@download/blockies";
import {useGetProfile} from "../api/hooks/useGetProfile";

interface IdenticonImgProps {
  address: string;
}

const IdenticonImg: React.FunctionComponent<IdenticonImgProps> = ({
  address,
}) => {
  const {data: profile} = useGetProfile(address);
  if (profile?.avatar_url) {
    return (
      <img
        src={profile.avatar_url}
        width={30}
        height={30}
        alt="Profile Avatar"
        style={{borderRadius: 2}}
      />
    );
  }

  const iconCanvas = createIcon({
    seed: address,
    size: 6,
    scale: 5,
  });

  // Convert canvas to data URL
  const iconDataURL = iconCanvas.toDataURL();

  // Return an img element with the data URL as the src
  return <img src={iconDataURL} alt="Identicon" style={{borderRadius: 2}} />;
};

export default IdenticonImg;
