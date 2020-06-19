import React, {useState} from 'react';

import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const ButtonWithLoading = () => {

    const [isLoading, setIsLoading] = useState(false);

    const enterLoading = index => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Button type="primary" loading={isLoading} onClick={() => enterLoading()}>
            Lookup
        </Button>
    );
}

export default ButtonWithLoading;