import React from "react";

import { Button, Img, Text } from "components";

const InAppContentCrew = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-12 md:h-auto rounded-[50%] w-12"
          src="images/img_bg_3.png"
          alt="bg"
        />
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-base text-gray-50 tracking-[0.08px] w-auto"
            size="txtInterSemiBold16"
          >
            {props?.username}
          </Text>
          <Text
            className="text-blue_gray-300 text-xs tracking-[0.06px] w-auto"
            size="txtInterMedium12"
          >
            {props?.jobtitle}
          </Text>
        </div>
        <div className="bg-gradient  flex flex-col h-12 md:h-auto items-center justify-end px-5 py-[72px] w-[167px]">
          {!!props?.arrowicon ? (
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              color="gray_900_02"
              size="sm"
              variant="fill"
            >
              <Img alt="arrowright" src={props?.arrowicon} />
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

InAppContentCrew.defaultProps = {
  username: "Gwendoline Christie",
  jobtitle: "Larissa Weems",
};

export default InAppContentCrew;
