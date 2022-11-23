import { gql, useMutation, useReactiveVar } from '@apollo/client'
import { useState } from 'react';
import { useAppSelector } from '../../app/store';
import { selectSessionId } from '../auth/authSlice';
import { selectScale } from './spaceSlice';

const PUBLISH_AVATAR = gql`
  mutation PublishAvatar($sessionId: String!, $abstractId: String!, $x: Int!, $y: Int!) {
    publishAvatar(sessionId: $sessionId, abstractId: $abstractId, x: $x, y: $y) {
      id
    }
  }
`;

export default function usePublishAvatar(abstractId: string) {
  const sessionId = useAppSelector(selectSessionId);
  
  const scale = useAppSelector(selectScale(abstractId)) ?? 1;

  const [count, setCount] = useState(0);

  const [publish] = useMutation(PUBLISH_AVATAR, {
    onError: error => {
      console.error(error);
    },
    onCompleted: data => {
      //console.log(data);
    }
  });

  const publishAvatar = (x: number, y: number) => {
    if (!abstractId) return;

    setCount(count => (count + 1) % 10);
    if (count !== 0) return;

    publish({
      variables: {
        sessionId,
        abstractId,
        x: Math.round(x / scale),
        y: Math.round(y / scale),
      }
    });
  }

  return { publishAvatar }
}