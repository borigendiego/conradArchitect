import React from 'react';
import { MEMBERS } from '../../components/about/constants';
import Profile from '../../components/about/tile/profile';

export const getStaticPaths = async () => {
    return {
        paths: MEMBERS.map(member => {
            return {
                params: {
                    member: member.url,
                },
            };
        }),
        fallback: false //indicates the type of fallback
    }
}

export const getStaticProps = async (context) => {
    const memberName = context.params.member;

    return {
        props: {
            memberName: memberName,
        }
    }
}

const Member = ({ memberName }) => {
    const selectedMember = MEMBERS.filter(member => member.url === memberName);

    return (
        <Profile profileData={selectedMember[0]} />
    )
}

export default Member;
