export const DeleteContact = () => {

    return (
        <>
            <section>
                <form onSubmit={''}>
                    <fieldset>
                        {/* <input placeholder='ID contact' {...register("id")} />
                        {errors.id && <span>{errors.id.message}</span>} */}
                    </fieldset>
                    <button type='submit'>delete</button>
                </form>
            </section>
        </>
    )
}