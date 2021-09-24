import React from 'react';
import PropTypes from 'prop-types';

import Button from "../../moduls/Button/Button";

const Pagination = ({wrapperName, page, buttonDown, buttonUp, onClickDown, onClickUp, counterName}) => {
    return (
        <div className={wrapperName}>
            <Button
                disabled={page === 1 ? true : false}
                text="Назад"
                className={buttonDown}
                onClick={onClickDown}
            />

            <span className={counterName}>{page}</span>

            <Button
                disabled={page === 10 ? true : false}
                text="Вперед"
                className={buttonUp}
                onClick={onClickUp}
            />
        </div>
    );
};

Pagination.propTypes = {
    wrapperName: PropTypes.string,
    buttonDown: PropTypes.string,
    buttonUp: PropTypes.string,
    counterName: PropTypes.string,
    page: PropTypes.number,
    onClickDown: PropTypes.func,
    onClickUp: PropTypes.func,
};

export default Pagination;