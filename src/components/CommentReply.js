import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { showFormattedDate } from '../utils';

const CommentReply = ({ reply }) => {
    const [point, setPoint] = useState(reply.point);
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
        <div className='comment-reply'>
            <div className='image-reply'>
                <img src={reply.avatar} alt='avatar' />
            </div>
            <div>
                <h3>{reply.author}</h3>
                <span className='date'>{showFormattedDate(reply.date)}</span>
                <p>{reply.message}</p>
                <div className='point-reply'>
                    <span>{point} point</span>
                    <button onClick={handleUpVote} style={{backgroundColor: isUpVote ? 'green' : '', color: isUpVote ? 'white' : ''}} disabled={isVote}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button onClick={handleDownVote} style={{backgroundColor: isDownVote ? 'red' : '', color: isDownVote ? 'white' : ''}} disabled={isVote}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default CommentReply;