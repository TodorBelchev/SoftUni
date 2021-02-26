function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }

        classToExtend.prototype.isFast = function() {
            return this.processorSpeed > (this.ram / 4);
        }

        classToExtend.prototype.isRoomy = function() {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function() {
            let name = this.manufacturer;
            if (this.keyboard.manufacturer === name && this.monitor.manufacturer === name) {
                return true;
            } else {
                return false;
            }
        }
        classToExtend.prototype.isClassy = function() {
            if (this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3) {
                return true;
            } else {
                return false;
            }
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}