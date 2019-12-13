import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
interface Props{
    exercise: string;
    repsAndWeight: string;
    sets: string[];
}
export const WorkoutCard: React.FC<Props> = ({ exercise, repsAndWeight,sets }) => {
    return (
       <View style={styles.card}>
           <View style={styles.topRow}>
            <Text style={styles.topRowText}>{exercise}</Text>
            <Text style={styles.topRowText}>{ repsAndWeight }</Text>
           </View>
           <View style={styles.bottomRow}>
            { sets.map((set, idx) => {
                if( set === 'x'){
                    return <View style={styles.fadedcircle} key={set + idx}>
                                <Text style={styles.grayText}>X</Text>
                            </View>
                }
                if( set === ''){
                    return <View style={styles.fadedcircle} key={set + idx}>
                                <Text style={styles.grayText}></Text>
                            </View>
                }
                return (
                    <View style={[styles.circle]} key={set + idx}>
                        <Text style={styles.whiteText}>{set}</Text>
                    </View>
                )
            })}
           </View>
          
           
       </View>
    )
} 
const styles = StyleSheet.create({
    card: {
        width: '30%',
        margin: 'auto',
        backgroundColor: '#eafff4',
        padding: '10px'
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 10,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    topRowText: {
       fontSize: 20
    },
    whiteText: {
        fontSize: 16,
        color: 'white',
        margin: 'auto'
    },
    grayText: {
        fontSize: 16,
        color: '#4f4a48',
        margin: 'auto',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#60a369',
        padding: 10
    },
    fadedcircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#878680',
        padding: 10
    }
})
