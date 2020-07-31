import React, { FunctionComponent, useEffect } from 'react';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

interface INotificationAdd {
  visibility: boolean,
  title: string,
  setNotificationAddVisibility: (visibility : boolean) => void
}

const NotificationAdd:FunctionComponent<INotificationAdd> = (props) => {

useEffect(() => {
  if(props.visibility === true){
    props.setNotificationAddVisibility(false);
    notification.open({
      message: props.title,
      description:'La série vient d\'être ajoutée à votre calcul.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  }
});

  return (<></>);
}

export default NotificationAdd;