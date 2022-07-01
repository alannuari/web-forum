import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import CommentReply from './CommentReply';
import { showFormattedDate } from '../utils';

const Comment = ({ data }) => {
    const [point, setPoint] = useState(data.point);
    const [isVote, setIsVote] = useState(false);
    const [isUpVote, setIsUpVote] = useState(false);
    const [isDownVote, setIsDownVote] = useState(false);

    const handleUpVote = () => {
        setPoint(point + 1);
        setIsVote(true);
        setIsUpVote(true);
    }

    const handleDownVote = () => {
        setPoint(point - 1);
        setIsVote(true);
        setIsDownVote(true)
    }

    return (
        <>
            {data.avatar && (
                <div className='comment'>
                    <div className='image'>
                        <img src={data.avatar} alt='avatar' />
                    </div>
                    <div>
                        <h3>{data.author}</h3>
                        <span className='date'>{showFormattedDate(data.date)}</span>
                        <p>{data.message}</p>
                        <div className='point'>
                            <span>{point} point</span>
                            <button onClick={handleUpVote} style={{backgroundColor: isUpVote ? 'green' : '', color: isUpVote ? 'white' : ''}} disabled={isVote}>
                                <FontAwesomeIcon icon={faArrowUp} />
                            </button>
                            <button onClick={handleDownVote} style={{backgroundColor: isDownVote ? 'red' : '', color: isDownVote ? 'white' : ''}} disabled={isVote}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                        </div>
                        {data.replies.length > 0 && 
                            data.replies.map((reply, idx) => {
                                return (
                                    <CommentReply key={idx} reply={reply} />
                                );
                            })}
                    </div>
                </div>
            )}
        </>
    );
}
 
export default Comment;