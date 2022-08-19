// @ts-ignore
import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class DateUtilService {
  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);

    function differenceInYears(now: Date, diff: Date) {

    }

    const years = differenceInYears(now, diff);

    function addYears(diff: Date, years: void) {
      return undefined;
    }

    // @ts-ignore
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }

    function differenceInMonths(now: Date, diff: string | number | Date) {

    }

    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);

    function addMonths(diff: string | number | Date, months: any) {
      return undefined;
    }

    // @ts-ignore
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    function differenceInDays(now: Date, diff: string | number | Date) {

    }

    const days = differenceInDays(now, diff);
    // @ts-ignore
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }
  constructor() { }
}
