<script setup lang="ts">
import { Collapse } from 'vue-collapsed'
interface Faq {
    title: string
    answer: string
}
const faqList: Faq[] = [
    {
        title: 'Why choose Us?',
        answer: "We are willing to discuss, understand and accommodate a client's unique circumstances and we will always take the necessary steps to achieve set goals or targets and deliver the client's expectations.",
    },
    {
        title: 'What are some of our departments?',
        answer: 'Comercial Litigation,  Conveyancing, Environment & Land, Employment& Labour Relations, Family& Succession, Research and Legal Advice.  ',
    },
    {
        title: 'When did S&W Start?',
        answer: "The firm has been in continuous operation since 1977 making it the oldest lawfirm in Nakuru. It has a solid history and reputation acqured over that length of continous and uniterrupoted practice. It has grown and continues to grow from strength to strength repositioning itself in the emergent areas of legal pracyicve and adopting to the changing world and technologies. Everything about us is tailored towards solving our clients' needs is the best way possible.",
    },
    {
        title: 'Who are our Clients?',
        answer: 'We pride ourselves in a huge portfolio of corporate and individual clients with the firm opening and servicsing approximately 1,000 new files and successfully concluding as much every year.',
    },
]

const questions = ref(
    faqList.map(({ title, answer }, index) => ({
        title,
        answer,
        isExpanded: index === 1 || index === 5, // Initial values, display expanded on mount
    }))
)
function handleIndividual(selectedIndex: number) {
    questions.value[selectedIndex].isExpanded = !questions.value[selectedIndex].isExpanded
}

const toggleAttrs = computed(() =>
    questions.value.map((question, index) => ({
        id: `toggle_${index}`,
        'aria-expanded': question.isExpanded,
        'aria-controls': `collapse_${index}`,
    }))
)
const collapseAttrs = computed(() =>
    questions.value.map((_, index) => ({
        'aria-labelledby': `toggle_${index}`,
        id: `collapse_${index}`,
        role: 'region',
    }))
)

const middleIndex = ref<number>(Math.floor(faqList.length / 2))
</script>
<template>
    <div class="w-full flex flex-col gap-y-6 px-4 md:px-8 lg:px-20 xl:px-48 py-6 sm:py-8 bg-gray-100">
        <div class="flex flex-col gap-y-4">
            <div class="w-full flex flex-col gap-y-1">
                <h4 class="text-base uppercase font-light text-[#AD9263]">Any questions?</h4>
                <h1 class="text-3xl lg:text-4xl capitalize font-semibold mt-2">Frequent Asked Questions</h1>
            </div>
            <div class="w-full flex flex-col gap-y-2 mt-4 sm:mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <ul class="w-full flex flex-col gap-y-3">
                        <li
                            v-for="(question, index) in questions.slice(0, middleIndex + (questions.length % 2))"
                            :key="question.title"
                            class="w-full py-2 pl-2.5 sm:pl-4 pr-3 sm:pr-8 items-center shrink-0 flex flex-col gap-y-4 rounded bg-gray-200"
                        >
                            <button
                                v-bind="toggleAttrs[index]"
                                @click="handleIndividual(index)"
                                class="w-full flex flex-row items-center justify-between py-2 cursor-pointer"
                            >
                                <p class="text-lg">{{ question.title }}</p>
                                <Transition mode="out-in">
                                    <div class="w-6 h-6 text-[#AD9263]" v-if="!question.isExpanded">
                                        <IconsPlus />
                                    </div>
                                    <div v-else class="w-6 h-6 text-[#AD9263]">
                                        <IconsMinus />
                                    </div>
                                </Transition>
                            </button>
                            <Collapse
                                :when="question.isExpanded"
                                v-bind="collapseAttrs[index]"
                                class="w-full flex flex-col pb-2 pt-1 v-collapse"
                            >
                                <p class="text-base pr-4 sm:pr-8">
                                    {{ question.answer }}
                                </p>
                            </Collapse>
                        </li>
                    </ul>
                    <ul class="w-full flex flex-col gap-y-3">
                        <li
                            v-for="(question, index) in questions.slice(middleIndex + (questions.length % 2))"
                            :key="question.title"
                            class="w-full py-2 pl-2.5 sm:pl-4 pr-3 sm:pr-8 items-center shrink-0 flex flex-col gap-y-4 rounded bg-gray-200"
                        >
                            <button
                                v-bind="toggleAttrs[index + middleIndex + (questions.length % 2)]"
                                @click="handleIndividual(index + middleIndex + (questions.length % 2))"
                                class="w-full flex flex-row items-center justify-between py-2 cursor-pointer"
                            >
                                <p class="text-lg">{{ question.title }}</p>
                                <Transition mode="out-in">
                                    <div class="w-6 h-6 text-[#AD9263]" v-if="!question.isExpanded">
                                        <IconsPlus />
                                    </div>
                                    <div v-else class="w-6 h-6 text-[#AD9263]">
                                        <IconsMinus />
                                    </div>
                                </Transition>
                            </button>
                            <Collapse
                                :when="question.isExpanded"
                                v-bind="collapseAttrs[index]"
                                class="w-full flex flex-col pb-2 pt-1 v-collapse"
                            >
                                <p class="text-base pr-4 sm:pr-8">
                                    {{ question.answer }}
                                </p>
                            </Collapse>
                        </li>
                    </ul>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.v-collapse {
    transition: height 150ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>
