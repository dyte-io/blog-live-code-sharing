/* eslint-disable */

import { useState, useEffect, useRef } from 'react';
import { DyteMeeting, provideDyteDesignSystem } from '@dytesdk/react-ui-kit';
import { useDyteClient } from '@dytesdk/react-web-core';
import { createMeeting, joinMeeting } from '../utils/api'


const Meet = () => {
  const meetingEl = useRef();
  const [meeting, initMeeting] = useDyteClient();
  const [userToken, setUserToken] = useState();
  const [meetingId, setMeetingId] = useState();
  
	const createMeetingId = async () => {
		const newMeetingId = await createMeeting()
		setMeetingId(newMeetingId)
	}

	useEffect(() => {
		const id = window.location.pathname.split('/')[2]
		if(!id) {
			createMeetingId()
		} else {
      setMeetingId(id)
    }
	}, [])

  const joinMeetingId = async () => {
		if(meetingId) {
	    const authToken = await joinMeeting(meetingId)
	    await initMeeting({ 
        authToken, 
        // modules: {
        //   plugin: true,
        //   devTools: {
        //     logs: true,
        //     plugins: [
        //       {
        //         name: 'Collaborative-code-editor',
        //         port: '5000',
        //         id: '9da0deda-45d0-4f18-8ebc-c1dce262c11b'
        //       },
        //     ],
        //   }, 
        // },
      });
      setUserToken(authToken)
		}
  }

  useEffect(() => {
    if(meetingId && !userToken) joinMeetingId()
  }, [meetingId])

  useEffect(() => {
    if(userToken) {
      provideDyteDesignSystem(meetingEl.current, {
        theme: 'dark'
      });
    }
  }, [userToken])

  return (
    <>
      {userToken && meetingId ? <DyteMeeting mode='fill' meeting={meeting} ref={meetingEl} /> : <div>Loading...</div>}
    </>
  )
}

export default Meet