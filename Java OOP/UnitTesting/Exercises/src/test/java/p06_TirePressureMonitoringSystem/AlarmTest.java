package p06_TirePressureMonitoringSystem;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import static org.junit.Assert.*;

public class AlarmTest {

    Sensor sensor;
    Alarm alarm;

    @Before
    public void setup() {
        this.sensor = Mockito.mock(Sensor.class);
        this.alarm = new Alarm(this.sensor);
    }

    @Test
    public void check() {
        Mockito.when(this.sensor.popNextPressurePsiValue()).thenReturn(17.00);
        this.alarm.check();
        Assert.assertFalse(this.alarm.getAlarmOn());
    }

    @Test
    public void checkShouldTurnAlarmOnWithLowPressure() {
        Mockito.when(this.sensor.popNextPressurePsiValue()).thenReturn(16.99);
        this.alarm.check();
        Assert.assertTrue(this.alarm.getAlarmOn());
    }

    @Test
    public void checkShouldTurnAlarmOnWithHighPressure() {
        Mockito.when(this.sensor.popNextPressurePsiValue()).thenReturn(21.01);
        this.alarm.check();
        Assert.assertTrue(this.alarm.getAlarmOn());
    }

    @Test
    public void getAlarmOn() {
        Mockito.when(this.sensor.popNextPressurePsiValue()).thenReturn(20.00);
        Assert.assertFalse(this.alarm.getAlarmOn());
    }
}