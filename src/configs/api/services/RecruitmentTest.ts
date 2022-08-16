import axios from 'axios';

const RecruitmentTest = axios.create({
  baseURL: 'https://recruitment-test.flip.id',
});

export default RecruitmentTest;