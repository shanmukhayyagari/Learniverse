import store from "./Store"
export function StudentAction(value) {
    return (
        store.dispatch({
            type: 'STUDENT',
            payload: value
        })
    )
}
export function ProgramCordinatorAction(value) {
    return (
        store.dispatch({
            type: 'PROGRAMCOORDINATOR',
            payload: value
        })
    )
}

export function ProgramCordinatorAuthAction(value) {
    return (
        store.dispatch({
            type: 'PROGRAMCOORDINATORAUTH',
            payload: value
        })
    )
}

export function TeacherAction(value) {
    return (
        store.dispatch({
            type: 'TEACHER',
            payload: value
        })
    )
}
export function AdminAction(value) {
    return (
        store.dispatch({
            type: 'ADMIN',
            payload: value
        })
    )
}
export function QOAction(value) {
    return (
        store.dispatch({
            type: 'QO',
            payload: value
        })
    )
}
export function StuAuthAction(value) {
    return (
        store.dispatch({
            type: 'STUAUTH',
            payload: value
        })
    )
}
export function TeachAuthAction(value) {
    return (
        store.dispatch({
            type: 'TEACHAUTH',
            payload: value
        })
    )
}
export function TeacherProfileAction(value) {
    return (
        store.dispatch({
            type: 'TEACHERPROFILE',
            payload: value
        })
    )
}
export function StudentProfileAction(value) {
    return (
        store.dispatch({
            type: 'STUDENTPROFILE',
            payload: value
        })
    )
}
export function AdminAuthAction(value) {
    return (
        store.dispatch({
            type: 'ADMINAUTH',
            payload: value
        })
    )
}
export function QOAuthAction(value) {
    return (
        store.dispatch({
            type: 'QOAUTH',
            payload: value
        })
    )
}