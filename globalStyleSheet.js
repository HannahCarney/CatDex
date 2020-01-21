import { StyleSheet } from 'react-native'

export default globalstyles = StyleSheet.create({

    cardview: {
        backgroundColor: 'white',
        borderColor: '#000000',
        borderRadius: 8,
        borderWidth: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#000000',
        borderRadius: 8,
        borderWidth: 1,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    row: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
   
});