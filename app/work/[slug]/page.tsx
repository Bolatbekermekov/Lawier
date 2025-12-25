
import { notFound } from 'next/navigation'

import CaseDetailContent from '@/components/CaseDetailContent'
import { cases, getCaseBySlug } from '@/lib/cases'

export function generateStaticParams() {
	return cases.map(({ slug }) => ({ slug }))
}

export default function CaseDetailPage({
	params,
}: {
	params: { slug: string }
}) {
	const caseItem = getCaseBySlug(params.slug)

	if (!caseItem) {
		notFound()
	}

	return <CaseDetailContent caseItem={caseItem} />
}
