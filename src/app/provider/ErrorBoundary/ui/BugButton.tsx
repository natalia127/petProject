import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {

}
export const BugButton: FC<BugButtonProps> = () => {
    const [error, setError] = useState(false);
    const addThrow = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={addThrow}>
            throw Error
        </Button>
    );
};
