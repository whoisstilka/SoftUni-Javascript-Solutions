<script src="script.js" type="text/javascript">
  function mountainRun(input) {
      let recordInSeconds = Number(input[0]);
      let lengthInMeters = Number(input[1]);
      let timeInSecondsPerMeter = Number(input[2]);

      let timeNeeded = lengthInMeters * timeInSecondsPerMeter;
      let addedTime = Math.floor(lengthInMeters / 50) * 30;
      let sumOfTime = timeNeeded + addedTime;

      if (sumOfTime < recordInSeconds) {
          console.log(`Yes! The new record is ${sumOfTime.toFixed(2)} seconds.`);
      } else {
          console.log(`No! He was ${(sumOfTime - recordInSeconds).toFixed(2)} seconds slower.`);
      }
  }

  // mountainRun(["10164", "1400", "25"]);
  // mountainRun(["5554.36", "1340", "3.23"]);
  mountainRun(["1377", "389", "3"]);
</script>
