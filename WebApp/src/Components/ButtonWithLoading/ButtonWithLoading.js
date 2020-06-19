import React, {useState} from 'react';

import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const ButtonWithLoading = (props) => {

    // const [isLoading, setIsLoading] = useState(false);

    // const enterLoading = index => {
    //     props.onClick();
    //     setIsLoading(true);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, props.maxTimeLoading || 1000);
    // };

    return (
        <Button type="primary" loading={props.isLoading || false} onClick={props.onClick}>
            Lookup
        </Button>
    );
}

export default ButtonWithLoading;