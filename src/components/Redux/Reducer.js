const initialState = {
  Student: [],
  Admin: [],
  Teacher: [],
  Qo: [],
  ProgramCordinator: [],
  ProgramCordinatorAuth: false,
  stuAuth: false,
  TeachAuth: false,
  adminAuth: false,
  QoAuth: false,
  TeacherProfile: {},
  StudentProfile: {}
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'STUDENT':
      return { ...state, Student: action.payload };
    case 'TEACHER':
      return { ...state, Teacher: action.payload };
    case 'STUAUTH':
      return { ...state, stuAuth: action.payload };
    case 'TEACHAUTH':
      return { ...state, TeachAuth: action.payload };
    case 'TEACHERPROFILE':
      return { ...state, TeacherProfile: action.payload };
    case 'STUDENTPROFILE':
      return { ...state, StudentProfile: action.payload };
    case 'ADMIN':
      return { ...state, Admin: action.payload };
    case 'QO':
      return { ...state, Qo: action.payload };
    case 'ADMINAUTH':
      return { ...state, adminAuth: action.payload };
    case 'QOAUTH':
      return { ...state, QoAuth: action.payload };
    case 'PROGRAMCOORDINATOR':
      return { ...state, ProgramCordinator: action.payload };
    case 'PROGRAMCOORDINATORAUTH':
      return { ...state, ProgramCordinatorAuth: action.payload };
    default:
      return state;
  }
}
