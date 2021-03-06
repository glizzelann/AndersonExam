﻿(function () {
    'use strict';

    angular
        .module('App')
        .factory('ExamService', ExamService);

    ExamService.$inject = ['$http'];

    function ExamService($http) {
        return {
            Read: Read,
            ReadExamForExaminee: ReadExamForExaminee,
            ReadExamForPosition: ReadExamForPosition,
            Delete: Delete
        }

        function Read() {
            return $http({
                method: 'POST',
                url: '/Exam/Read',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }

        function ReadExamForExaminee(examineeId) {
            return $http({
                method: 'POST',
                url: '/Exam/ReadExamForExaminee/' + examineeId,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }

        function ReadExamForPosition(positionId) {
            return $http({
                method: 'POST',
                url: '/Exam/ReadExamForPosition/' + positionId,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }

        function Delete(exam) {
            return $http({
                method: 'DELETE',
                url: '/Exam/Delete',
                data: $.param(exam),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
    }
})();