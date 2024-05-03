function compareVersion(version1: string, version2: string): number {
    const version1Revisions = version1.split(".");
    const version2Revisions = version2.split(".");
    let max = Math.max(version1Revisions.length, version2Revisions.length);
    for(let i = 0; i < max; i++) {
        let version1RevisionValue: number = version1Revisions[i] !== undefined ? parseInt(version1Revisions[i].replace(/^0+/g, "")) : 0;
        if(isNaN(version1RevisionValue)) version1RevisionValue = 0;
        let version2RevisionValue: number = version2Revisions[i] !== undefined ? parseInt(version2Revisions[i].replace(/^0+/g, "")) : 0;
        if(isNaN(version2RevisionValue)) version2RevisionValue = 0;
        if(version1RevisionValue > version2RevisionValue) return 1;
        if(version1RevisionValue < version2RevisionValue) return -1;
    }
    return 0;
};