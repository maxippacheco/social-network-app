import moment from "moment"

export const timeFormat = ( date: string ) => {
	const time = moment( date ).format( "DD/MM/YYYY hh:mm" );

	return time;
}