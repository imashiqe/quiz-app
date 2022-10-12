export const GetQuizAndDynamicId = async () => {
    const quizLoaderData = await fetch(`https://openapi.programming-hero.com/api/quiz`);
    const quizData = await quizLoaderData.json();


    // quiz topic data loader

    



    return {quizData}
}