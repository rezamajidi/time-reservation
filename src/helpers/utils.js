import { format } from "date-fns";
import parseISO from "date-fns/parseISO";

export const groupTimesByEndDate = (timeSlotsArray) => {
  /**
   *  start_date: date
   *  end_date: date
   */
  const outObject = timeSlotsArray.reduce((a, e) => {
    // GROUP BY estimated key (estKey), well, may be a just plain key
    // a -- Accumulator result object
    // e -- sequentally checked Element, the Element that is tested just at this itaration

    // new grouping name may be calculated, but must be based on real value of real field
    const theKey = format(parseISO(e.end_time), "yyyy-MM-dd");
    const estKey = theKey;
    (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
    return a;
  }, {});
  return outObject;
};
