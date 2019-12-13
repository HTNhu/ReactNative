import { type } from "os";
import { createContext } from "react";
import { observable } from "mobx";

interface WorkoutHistory{
    [key: string]: Array<{
        exercise: string,
        value: number
    }>
}
interface CurrentExercise{
    weight: number;
    reps: number;
    numSets: number;
    exercise: string; 
}
type WorkoutDay = 'a' | 'b'
class WorkoutStore {
    @observable currentSquat!: number;
    @observable currentBenchPress!: number;
    @observable currentOverheadPress!: number;
    @observable currentDeadlift!: number;
    @observable currentBarbellRow!: number;

    @observable lastWorkoutType!: WorkoutDay;
    @observable history!: WorkoutHistory;
    @observable currentExercise!: CurrentExercise;
}
export const WorkoutStoreContext = createContext(new WorkoutStore())