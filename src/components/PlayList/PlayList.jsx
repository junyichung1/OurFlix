import React from 'react';
import PlayListItem from '../PlayListItem/PlayListItem'

function PlayList(props) {
    return(
        <>
        <ul>
                    {props.lists.map(list => (
                        <li>
                            <PlayListItem
                                list={list}
                                key={list._id}
                            />
                        </li>
                    ))}
                </ul>
        </>
    )
}

export default PlayList;