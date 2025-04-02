export const meetingMinutesEndpoints = [
    { endpoint: "/v1/MeetingMinutes/GetAllMeetingMinutes?partnerId={partnerId}", used: true },
    { endpoint: "/v1/MeetingMinutes/CreateMeetingMinute", used: true },
    { endpoint: "/v1/MeetingMinutes/GetAllMeetingMinuteTypes", used: true },
    { endpoint: "/v1/MeetingMinutes/GetMeetingMinuteById?id={id}", used: true },
    { endpoint: "/v1/MeetingMinutes/UpdateMeetingMinute", used: true },
    { endpoint: "/v1/MeetingMinutes/Share/{meetingMinutId}", used: true },
    { endpoint: "/v1/MeetingMinutesGuest/Get/{token}", used: true },
    { endpoint: "/v1/MeetingMinutes/{id}", used: true },
  ];
  