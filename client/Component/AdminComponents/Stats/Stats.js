import React from 'react'
import Comments from './Comments';
import ReadyToVote from './ReadyToVote';
import Votes from "../../Votes/votes";

const Stats = () => {
    return (
        <>
            <Votes />
            <Comments />
            <ReadyToVote />
        </>
    )
};

export default Stats;