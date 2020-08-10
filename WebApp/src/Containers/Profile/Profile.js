import React, { useState, useEffect } from "react";
import { Descriptions, Badge, Card } from "antd";
import TextTranslation from "../../Components/TextTranslation/TextTranslation";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  return (
    <Card loading={isLoading} style={{ width: "70%" }}>
      <Descriptions title="User Info" layout="vertical" bordered column={10}>
        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-UserID.1" />}
          span={2}
        >
          trungnv
        </Descriptions.Item>
        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-Name.1" />}
          span={4}
        >
          Nguyen Van Trung
        </Descriptions.Item>
        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-Status.1" />}
          span={4}
        >
          <Badge
            status="processing"
            text={<TextTranslation textName="ClassInfo-Table-Working.1" />}
          />
        </Descriptions.Item>

        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-Faculty.1" />}
          span={4}
        >
          Software Engineering
        </Descriptions.Item>

        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-Email.1" />}
          span={4}
        >
          trungnv@uit.edu.vn
        </Descriptions.Item>
        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-NationalID.1" />}
          span={2}
        >
          07920128123
        </Descriptions.Item>

        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-Address.1" />}
          span={6}
        >
          173/22 Nguyen Thi Minh Khai, P6, Q3, TP.HCM
        </Descriptions.Item>
        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-DateOfBirth.1" />}
          span={2}
        >
          17/08/1972
        </Descriptions.Item>
        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-Sex.1" />}
          span={2}
        >
          Male
        </Descriptions.Item>

        <Descriptions.Item
          label={<TextTranslation textName="ClassInfo-Table-Classes.1" />}
        >
          SE104.K22.PMCL
          <br />
          IT002.K23.PMCL
          <br />
          IT007.K18.KHCL
          <br />
          SE101.K13.PMCL
          <br />
          PH002.K25
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default Profile;
