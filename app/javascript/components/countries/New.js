import React from 'react'

const New = ({onNewCat = f => f}) => {
    let name;
    const submit = e => {
        e.preventDefault();
        onNewCat(name.value);
        name.value = '';
        name.focus()
    };

    return(
        <form className="ui form" onSubmit={submit}>
            <div className="ui field">
                <input  ref={input => name = input}
                        type="text"
                        placeholder="Name..." required />
            </div>
            <button className="ui button green">создать</button>
        </form>
    )
};
export default New;